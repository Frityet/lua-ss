love-nuklear:
	git submodule update --init --recursive

nuklear.so: love-nuklear
	cmake -B love-nuklear/build -S love-nuklear
	$(MAKE) -C love-nuklear/build
	cp love-nuklear/build/nuklear.so $@

.PHONY: clean run
clean:
	rm -rf love-nuklear/build nuklear.so

run: nuklear.so
	love ./
